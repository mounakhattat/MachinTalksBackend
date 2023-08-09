package TestApplication.MachinesTalk.repositories;

import TestApplication.MachinesTalk.entities.Scenario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScenarioRepository  extends JpaRepository<Scenario, Integer> {
}
