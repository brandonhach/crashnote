package bhach.server.controllers;

import bhach.server.models.CrashNote;
import bhach.server.repositories.CrashNoteRepository;
import java.util.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/crashnote")
public class CrashNoteController {
    public final CrashNoteRepository crashNoteRepository;

    public CrashNoteController(CrashNoteRepository crashNoteRepository) {
        this.crashNoteRepository = crashNoteRepository;
    }

    /**
     * Creates a note via JSON
     * @param crashNote
     * @return JSON response 
     */
    @PostMapping("/create")
    public ResponseEntity<Map<String, Object>> createNote(@RequestBody CrashNote crashNote) {
        try {
            CrashNote savedNote = crashNoteRepository.save(crashNote);
            Map<String, Object> response = new HashMap<>();
            // Remove the saveNote info after testing is done.
            response.put("status", "success");
            response.put("msg", "CrashNote saved successfully");
            response.put("data", savedNote);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", "error");
            errorResponse.put("message", "Failed to save CrashNote: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    /**
     * Fetch all notes from CrashNote table 
     * @return List<CrashNote> 
     */
    @GetMapping("/notes")
    public List<CrashNote> getAllNotes() {
        return crashNoteRepository.findAll();
    }

    /**
     * Get a single note via uuid 
     * @param id
     * @return CrashNote obj
     */
    @GetMapping("/note/{id}")
    public ResponseEntity<Map<String, Object>> getNoteById(@PathVariable UUID id) {
        try {
            Optional<CrashNote> noteOptional = crashNoteRepository.findById(id);
            if (noteOptional.isPresent()) {
                Map<String, Object> response = new HashMap<>();
                response.put("status", "success");
                response.put("data", noteOptional.get());
                return ResponseEntity.ok(response);
            } else {
                Map<String, Object> errorResponse = new HashMap<>();
                errorResponse.put("status", "error");
                errorResponse.put("message", "Note not found with id: " + id);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
            }
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", "error");
            errorResponse.put("message", "Failed to save CrashNote: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    /**
     * Get notes based on search query
     * @param 
     * @return List of notes
     */
    @GetMapping("/search/{query}")
    public ResponseEntity<Map<String, Object>> searchNoteByQuery(@PathVariable String query) {
        try {
            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("data", 1);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("status", "error");
            errorResponse.put("message", "Failed to save CrashNote: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}

