package com.machinestalk.repositories;

import com.machinestalk.entities.Scenario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScenarioRepository  extends JpaRepository<Scenario, Integer> {
}
