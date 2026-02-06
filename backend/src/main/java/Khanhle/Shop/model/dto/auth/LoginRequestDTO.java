package khanhle.shop.model.dto.auth;

import jakarta.validation.constraints.NotBlank;
import khanhle.shop.common.validation.Identifier;

public class LoginRequestDTO {
    @NotBlank
    @Identifier
    private String username;

    @NotBlank
    private String password;

    public LoginRequestDTO() {
    }

    public LoginRequestDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
