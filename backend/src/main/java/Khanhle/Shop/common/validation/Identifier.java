package khanhle.shop.common.validation;

import java.lang.annotation.Documented;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.PARAMETER;
import java.lang.annotation.Retention;
import static java.lang.annotation.RetentionPolicy.RUNTIME;
import java.lang.annotation.Target;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Documented
@Constraint(validatedBy = IdentifierValidator.class)
@Target({FIELD, PARAMETER})
@Retention(RUNTIME)
public @interface Identifier {
    String message() default "must be a valid username, email, or phone";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
