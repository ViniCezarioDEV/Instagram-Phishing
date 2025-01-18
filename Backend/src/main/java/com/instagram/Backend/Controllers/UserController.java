package com.instagram.Backend.Controllers;

import com.instagram.Backend.DTO.ResponseDTO;
import com.instagram.Backend.Models.User;
import com.instagram.Backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/login")
public class UserController {

    @Autowired
    UserRepository repository;

    @GetMapping()
    public List<User> returnAllRegisters() {
        return repository.findAll();
    }

    @PostMapping()
    public ResponseEntity<Object> createNewRegister(@RequestBody User body) {
        Optional<User> user = this.repository.findByLogin(body.getLogin());
        
        if(user.isEmpty()) {
            User newUser = new User();
            newUser.setLogin(body.getLogin());
            newUser.setPassword(body.getPassword());
            this.repository.save(newUser);
            return ResponseEntity.ok(new ResponseDTO(newUser.getLogin(), newUser.getPassword()));
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/{id}")
    public void deleteRegister(@PathVariable int id) {
        User user = repository.findById(id).get();
        repository.delete(user);
    }


}
