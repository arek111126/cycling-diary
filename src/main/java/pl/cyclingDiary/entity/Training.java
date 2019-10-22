package pl.cyclingDiary.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString
@Table(name = "training")
public class Training {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    private String name;

    @NotBlank
    private String place;

    @NotBlank
    private String distance;

    private String creationDate;

    @NotBlank
    private String trainingDate;

    @Transient
    @NotNull
    private MultipartFile file;


    private double kcal;


    private double averageNew;


    @Lob
    private String gpxXml;

    @JsonIgnore
    @ManyToOne
    private User user;

    @PrePersist
    public void setCreatedDate() {
        LocalDate localDate = LocalDate.now();
        this.creationDate = localDate.toString();
    }


}
