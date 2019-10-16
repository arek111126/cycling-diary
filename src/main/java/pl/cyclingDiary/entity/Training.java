package pl.cyclingDiary.entity;


import lombok.*;
import org.springframework.web.multipart.MultipartFile;
import pl.cyclingDiary.model.GpxPojo.TrkptType;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

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

    @Lob
    private byte[] gpxXml;

    @ManyToOne
    private User user;

    @PrePersist
    public void setCreatedDate() {
        LocalDate localDate = LocalDate.now();
        this.creationDate = localDate.toString();
    }

}
