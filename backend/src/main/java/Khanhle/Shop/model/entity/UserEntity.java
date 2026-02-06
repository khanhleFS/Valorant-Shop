package khanhle.shop.model.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import khanhle.shop.infrastructure.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserEntity extends BaseEntity {

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name= "age", nullable = false)
    private Integer age;

    @Column(name= "address", nullable = false)
    private String address;

    @Column(name= "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name= "full_name", nullable = false)
    private String fullName;

    @Column(name= "avatar_url")
    private String avatarUrl;

    @Column(name="birthday")
    private LocalDate birthday;

    @Column(name= "status", nullable = false)
    private String status;

    @ManyToOne
    @JoinColumn(name = "ROLE", nullable = false)
    private RoleEntity role;
}
