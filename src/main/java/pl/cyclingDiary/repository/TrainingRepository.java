package pl.cyclingDiary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.cyclingDiary.entity.Training;
import pl.cyclingDiary.entity.User;

import java.util.List;

public interface TrainingRepository  extends JpaRepository<Training,Integer> {
    List<Training> findAllByUser(User u);

    @Query("SELECT t FROM Training t WHERE t.user.login = :login")
    List<Training> findAllByUserId(@Param("login") String login);
}
