package TestApplication.MachinesTalk.repositories;

import TestApplication.MachinesTalk.entities.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {
}
