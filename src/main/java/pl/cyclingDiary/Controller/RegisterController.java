package pl.cyclingDiary.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.cyclingDiary.Entity.User;
import pl.cyclingDiary.Repository.RoleRepository;
import pl.cyclingDiary.Repository.UserRepository;
import pl.cyclingDiary.model.Roles;

import javax.validation.Valid;

@Controller
public class RegisterController {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @GetMapping("/register")
    public String showRegisterForm(Model model) {
        model.addAttribute("user", new User());
        return "registerAccount";
    }

    @PostMapping("/register")
    public String registerNewUser(@Valid User user, BindingResult result) {


        if (result.hasErrors()) {
            return "registerAccount";
        } else {
            user.setEnabled(1);
            user.getRoles().add(roleRepository.findFirstById(Roles.ROLE_USER));
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);

            return "redirect:/";
        }
    }

    @GetMapping("/test")
    @ResponseBody
    public String test() {
        return String.valueOf(Roles.ROLE_USER);
    }

}
