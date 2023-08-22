package com.machinestalk.repositories;

import com.machinestalk.entities.Setup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SetupRepository  extends JpaRepository<Setup, Integer> {
}
