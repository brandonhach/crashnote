package bhach.server.repositories;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import bhach.server.models.CrashNote;

public interface CrashNoteRepository extends JpaRepository<CrashNote, UUID> {
    
}
