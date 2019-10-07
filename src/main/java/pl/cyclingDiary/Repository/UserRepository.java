package pl.cyclingDiary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.cyclingDiary.Entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {

}
