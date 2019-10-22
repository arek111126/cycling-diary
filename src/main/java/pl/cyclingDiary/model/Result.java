package pl.cyclingDiary.model;


import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Result {
    private String login;
    private long sumTrainings;
    private String sumDistance;
    private double sumKcal;
    private double average;



}
