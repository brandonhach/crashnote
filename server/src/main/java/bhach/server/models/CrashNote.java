package bhach.server.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.UUID;

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
    private String editorContent;

    // Add validation using Jakarta validation
    public CrashNote() {}

   
}
