package pl.cyclingDiary.entity;


import lombok.*;

import javax.persistence.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "training")
public class Training {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String place;
    private String distance;
    private String creationDate;
    private String trainingDate;

    @ManyToOne
    private User user;



}
