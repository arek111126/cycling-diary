package pl.cyclingDiary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.cyclingDiary.entity.User;
import pl.cyclingDiary.repository.UserRepository;
import pl.cyclingDiary.security.UserInSessionService;
import pl.cyclingDiary.validate.ChangeUserDataGroup;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Controller
@Transactional
public class UserController {


    @Autowired
    UserInSessionService userInSessionService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/app/userData")
    @ResponseBody
    public ResponseEntity<User> getCurentUser() {
        return ResponseEntity.status(HttpStatus.OK).body(userRepository.findFirstByLogin(userInSessionService.getUserFromSessionByLogin()));
    }

    @GetMapping("/app/users")
    @ResponseBody
    public ResponseEntity<List<User>> getAllusers() {
        return ResponseEntity.status(HttpStatus.OK).body(userRepository.findAll());
    }

    @PostMapping("/app/changeUserData")
    public ResponseEntity<User> updateUserData(User user) {

        User userInDatabase = userRepository.findFirstByLogin(userInSessionService.getUserFromSessionByLogin());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        if (passwordEncoder.matches(user.getCurrentPassword() != null  ?user.getCurrentPassword() : ""  , userInDatabase.getPassword())) {


            if ((user.getPassword() != null) && (user.getRetypePassword() != null) && !user.getPassword().trim().isEmpty() && !user.getRetypePassword().trim().isEmpty() && user.getPassword().equals(user.getRetypePassword())) {
                userInDatabase.setPassword(encryptedPassword);
                userInDatabase.setRetypePassword(encryptedPassword);
            } else {
                userInDatabase.setRetypePassword(userInDatabase.getPassword());
            }


            userInDatabase.setFirstName(user.getFirstName());
            userInDatabase.setSureName(user.getSureName());
            userInDatabase.setEmail(user.getEmail());

            userRepository.save(userInDatabase);

            return ResponseEntity.status(HttpStatus.OK).body(user);
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new User());


        }

    }

    @PostMapping("/app/deleteUser")
    public ResponseEntity<?> deleteUser(@RequestParam("id") int id){
        userRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("item deleted");
    }


}