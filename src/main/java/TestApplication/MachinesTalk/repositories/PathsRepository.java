package TestApplication.MachinesTalk.repositories;

import TestApplication.MachinesTalk.entities.Paths;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PathsRepository extends JpaRepository<Paths, Integer> {
   List<Paths> findByApplication_Id(Integer id);
}
