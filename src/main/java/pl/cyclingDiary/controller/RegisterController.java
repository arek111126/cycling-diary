package pl.cyclingDiary.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.cyclingDiary.entity.Role;
import pl.cyclingDiary.entity.User;
import pl.cyclingDiary.repository.RoleRepository;
import pl.cyclingDiary.repository.UserRepository;
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


    @GetMapping("/login")
    public String showLoginForm(){
        return !(SecurityContextHolder.getContext().getAuthentication()
                instanceof AnonymousAuthenticationToken)  ? "redirect:/" : "login" ;
    }

    @GetMapping("/register")
    public String showRegisterForm(Model model) {
        model.addAttribute("user", new User());
        return "registerAccount";
    }

    @PostMapping("/register")
    public String registerNewUser( @Valid User user,BindingResult result,Model model) {


        if (result.hasErrors() ) {
            return "registerAccount";
        } else {
            String encodedPassword= passwordEncoder.encode(user.getPassword());
            model.addAttribute("newUser","true");

            user.setRetypePassword(encodedPassword);
            user.setPassword(encodedPassword);
            user.setEnabled(1);
            user.getRoles().add(roleRepository.findFirstByRoleName("ROLE_USER"));
            userRepository.save(user);

            return "redirect:/login?newUser=true";

        }
    }

    @GetMapping("/test")
    @ResponseBody
    public String test() {
        return String.valueOf(Roles.ROLE_USER);
    }

}
