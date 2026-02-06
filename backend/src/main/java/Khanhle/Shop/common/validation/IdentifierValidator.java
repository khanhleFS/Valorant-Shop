package khanhle.shop.common.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class IdentifierValidator implements ConstraintValidator<Identifier, String> {

    private static final String EMAIL_REGEX = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$";
    private static final String PHONE_REGEX = "^\\+?\\d{9,15}$";
    private static final String USERNAME_REGEX = "^[A-Za-z0-9._-]{3,30}$";

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) return false;
        String trimmed = value.trim();
        if (trimmed.isEmpty()) return false;
        if (trimmed.matches(EMAIL_REGEX)) return true;
        if (trimmed.matches(PHONE_REGEX)) return true;
        return trimmed.matches(USERNAME_REGEX);
    }
}
