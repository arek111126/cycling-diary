package pl.cyclingDiary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.cyclingDiary.entity.Role;


public interface RoleRepository extends JpaRepository<Role,Integer> {
    Role findFirstById(int id);
}
