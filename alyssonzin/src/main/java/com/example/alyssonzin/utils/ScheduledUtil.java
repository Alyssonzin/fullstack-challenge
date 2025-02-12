package com.example.alyssonzin.utils;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class ScheduledUtil {
    private final ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);

    // Agenda qualquer função para ser executada após um determinado tempo em
    // segundos
    public void scheduleFunction(Runnable function, int delayInSeconds) {
        executor.schedule(function, delayInSeconds, TimeUnit.SECONDS);
    }
}