package bhach.server.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.UUID;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "crashnotes")
public class CrashNote {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String title;

    private String description;

    private String tags;

    @Column(columnDefinition = "text")
    private String editorContent;

    @Column(name = "createdAt", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // Add validation using Jakarta validation
    public CrashNote() {
        onCreate();
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
