package pl.cyclingDiary.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;
import pl.cyclingDiary.validate.ConfirmPassword;
import pl.cyclingDiary.validate.CurrentPassword;
import pl.cyclingDiary.validate.UserValidationGroup;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.groups.Default;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@ToString
@ConfirmPassword
@CurrentPassword(groups = UserValidationGroup.class)
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

    @Transient
    private String currentPasword;


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


}
