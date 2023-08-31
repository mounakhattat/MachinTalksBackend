package com.machinestalk.repositories;

import com.machinestalk.entities.Paths;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PathsRepository extends JpaRepository<Paths, Integer> {
   List<Paths> findByApplication_Id(Integer id);
   Page<Paths> findByApplication_Id(Integer id , Pageable pageable);

}
