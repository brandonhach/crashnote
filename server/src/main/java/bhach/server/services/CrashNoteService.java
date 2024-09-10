package bhach.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import bhach.server.models.CrashNote;
import bhach.server.repositories.CrashNoteRepository;

@Service
public class CrashNoteService {
    @Autowired
    private CrashNoteRepository crashNoteRepository;

    public Page<CrashNote> getAllNotesByPagination(int page, int size) {
        PageRequest pageable = PageRequest.of(page, size);
        return crashNoteRepository.findAll(pageable);
    }

    public Page<CrashNote> searchNotesPagination(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return crashNoteRepository.searchNotes(query, pageable);
    }
}
