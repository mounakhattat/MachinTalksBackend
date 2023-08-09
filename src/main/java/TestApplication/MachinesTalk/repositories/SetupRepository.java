package TestApplication.MachinesTalk.repositories;

import TestApplication.MachinesTalk.entities.Setup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SetupRepository  extends JpaRepository<Setup, Integer> {
}
