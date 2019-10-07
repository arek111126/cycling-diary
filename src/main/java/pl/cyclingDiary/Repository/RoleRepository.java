package pl.cyclingDiary.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.cyclingDiary.Entity.Role;


public interface RoleRepository extends JpaRepository<Role,Integer> {
    Role findFirstById(int id);
}
