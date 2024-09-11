package bhach.server.controllers;

import bhach.server.models.CrashNote;
import bhach.server.repositories.CrashNoteRepository;
import bhach.server.services.CrashNoteService;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/crashnote")
public class CrashNoteController {
    @Autowired
    private CrashNoteService crashNoteService;
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
     * Pagination included. 
     * @return List<CrashNote> 
     */
    @GetMapping("/notes")
    public ResponseEntity<Page<CrashNote>> getAllNotes(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "12") int size) {
        Page<CrashNote> paginatedPage = crashNoteService.getAllNotesByPagination(page, size);
        return ResponseEntity.ok(paginatedPage);
    }

    /**
     * Get a single note via uuid 
     * @param id
     * @return CrashNote obj
     */
    @GetMapping("/note/{id}")
    public ResponseEntity<Map<String, Object>> getNoteById(@PathVariable String id) {
        try {
            UUID uuid = UUID.fromString(id); 
            Optional<CrashNote> noteOptional = crashNoteRepository.findById(uuid);
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
    public ResponseEntity<Page<CrashNote>> searchNotes(
            @RequestParam String query,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Page<CrashNote> results = crashNoteService.searchNotesPagination(query, page, size);
        return ResponseEntity.ok(results);
    }
}

