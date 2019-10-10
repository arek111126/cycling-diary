package pl.cyclingDiary.validate;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = ConfirmPasswordValidator.class)
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface ConfirmPassword {

    String message() default "{register.confirmPassword.error.password.retype.message}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
