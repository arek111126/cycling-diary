package pl.cyclingDiary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.cyclingDiary.entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {

       User findFirstByLogin(String login);
}
