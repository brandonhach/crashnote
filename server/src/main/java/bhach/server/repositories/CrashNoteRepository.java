package bhach.server.repositories;

import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import bhach.server.models.CrashNote;

public interface CrashNoteRepository extends JpaRepository<CrashNote, UUID> {
    @Query("SELECT c FROM CrashNote c WHERE " +
        "LOWER(c.title) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
        "LOWER(c.tags) LIKE LOWER(CONCAT('%', :query, '%'))")
    Page<CrashNote> searchNotes(@Param("query") String query, Pageable pageable);

}
