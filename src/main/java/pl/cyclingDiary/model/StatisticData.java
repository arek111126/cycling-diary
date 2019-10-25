package pl.cyclingDiary.model;


import lombok.*;
import org.springframework.web.bind.annotation.GetMapping;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class StatisticData {
    private String month;
    private String distance;
    private double kcal;
    private double averageNew;
    private long numberOfTrainings;
}
