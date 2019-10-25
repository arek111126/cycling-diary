package pl.cyclingDiary.validate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import pl.cyclingDiary.entity.User;
import pl.cyclingDiary.repository.UserRepository;
import pl.cyclingDiary.security.UserInSessionService;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class CurrentPasswordValidator implements ConstraintValidator<CurrentPassword, Object> {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserInSessionService userInSessionService;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void initialize(CurrentPassword constraintAnnotation) {

    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {
        User u = (User) o;


//        if (passwordEncoder
//                .matches(u.getCurrentPasword(), userRepository.findFirstByLogin(userInSessionService.getUserFromSessionByLogin()).getPassword())
//                && (u.getPassword().equals(u.getRetypePassword()) || (u.getPassword().isEmpty() && u.getRetypePassword().isEmpty()))) {
//            return true;
//        }
//        return false;

        return true;


    }


}
