package com.machinestalk.services;

import com.machinestalk.entities.Setup;
import com.machinestalk.models.Directory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.List;

public interface SetupService {
    List<Setup> findAll();

    Setup save (Setup setup) throws Exception;

    Setup update ( Setup setup);

    Setup findById (Integer id);

    void delete(Integer id);

  void assignScenarioToSetup(Setup setup);
    void assignScenarioToSetupAndPath(Setup setup);
    public ResponseEntity<InputStreamResource> downloadRapport(Directory directoryurl) throws IOException;

}
