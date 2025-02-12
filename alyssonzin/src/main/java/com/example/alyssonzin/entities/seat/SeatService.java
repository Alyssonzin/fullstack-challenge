package com.example.alyssonzin.entities.seat;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.alyssonzin.infra.exceptions.NotFoundExceptions;

@Service
public class SeatService {
    private final SeatRepository seatRepository;

    @Autowired
    public SeatService(SeatRepository seatRepository) {
        this.seatRepository = seatRepository;
    }

    public Seat save(Seat seat) {
        return seatRepository.save(seat);
    }

    public List<Seat> findAll() {
        return seatRepository.findAll();
    }

    public Seat findById(Long id) {
        return seatRepository.findById(id).orElseThrow(() -> new NotFoundExceptions.SeatNotFound(id));
    }

    public void deleteById(Long id) {
        seatRepository.deleteById(id);
    }

    // Ocupa/desocupa o assento
    public Seat toggleIsOccupied(Long id) {
        Seat seatToUpdate = findById(id);
        seatToUpdate.setIsOccupied(!seatToUpdate.getIsOccupied()); // Inverte o estado do assento
        System.out.println("ASSENTO INVERTIDO: " + seatToUpdate.getIsOccupied());
        return save(seatToUpdate);
    }
}
