package com.akhi.trading_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akhi.trading_application.modal.User;


public interface UserRepository extends JpaRepository<User,Long>{

    User  findByEmail(String email);
}
