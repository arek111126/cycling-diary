package pl.cyclingDiary.Entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    private String login;

    @NotBlank
    private String password;

    @NotBlank
    private String firstName;

    @NotBlank
    @Transient
    private String retypePassword;

    @NotBlank
    private String sureName;

   
    private int enabled;

    @NotBlank
    @Email
    private String email;

    @ManyToMany(fetch=FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private List<Role> roles;

    public User() {
        roles = new ArrayList<>();
    }
}
