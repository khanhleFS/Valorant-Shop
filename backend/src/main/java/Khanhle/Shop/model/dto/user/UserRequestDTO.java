package khanhle.shop.model.dto.user;
import java.time.LocalDate;

public record UserRequestDTO(
        String email,
        String password,
        String phone,
        LocalDate birthday,
        boolean gender,
        boolean status
) {}
