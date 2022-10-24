package com.example.demo.Repository;

import com.example.demo.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository  extends JpaRepository<Admin, String> {
    @Query(
             "Select a.password from Admin a  where  a.mobileNumber =:m"
//            nativeQuery = true
    )
    public String getByUsername(@Param("m") String user);
}
