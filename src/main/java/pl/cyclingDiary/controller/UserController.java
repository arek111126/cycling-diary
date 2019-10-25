package pl.cyclingDiary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.cyclingDiary.entity.User;
import pl.cyclingDiary.repository.UserRepository;
import pl.cyclingDiary.security.UserInSessionService;
import pl.cyclingDiary.validate.UserValidationGroup;

import javax.validation.Valid;

@Controller
@Transactional
public class UserController {


    @Autowired
    UserInSessionService userInSessionService;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/app/userData")
    @ResponseBody
    public ResponseEntity<User> getCurentUser() {
        return ResponseEntity.status(HttpStatus.OK).body(userRepository.findFirstByLogin(userInSessionService.getUserFromSessionByLogin()));
    }

    @PostMapping("/app/changeUserData")
    public ResponseEntity<User> updateUserData(@Validated({UserValidationGroup.class}) User user, BindingResult bindingResult) {


        System.out.println(user);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }
}
