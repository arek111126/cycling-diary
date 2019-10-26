package pl.cyclingDiary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;
import pl.cyclingDiary.validate.ChangeUserDataGroup;
import pl.cyclingDiary.validate.ConfirmPassword;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter

@ConfirmPassword
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


    @Transient
    private String retypePassword;


    @Transient
    private String currentPassword;


    @NotBlank
    private String sureName;


    private int enabled;

    @NotBlank
    @Email
    private String email;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    @JsonIgnore
    private List<Role> roles;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Training> trainings;


    public User() {
        roles = new ArrayList<>();
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", retypePassword='" + retypePassword + '\'' +
                ", currentPassword='" + currentPassword + '\'' +
                ", sureName='" + sureName + '\'' +
                ", enabled=" + enabled +
                ", email='" + email + '\'' +
                ", roles=" + roles +
                ", trainings=" + trainings +
                '}';
    }
}
