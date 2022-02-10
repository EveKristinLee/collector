package moviegoods.movie.domain.entity.Transaction;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import moviegoods.movie.domain.entity.Content_Detail.Content_Detail;
import moviegoods.movie.domain.entity.Like_Basket.Like_Basket;
import moviegoods.movie.domain.entity.Report.Report;
import moviegoods.movie.domain.entity.User.User;
import org.hibernate.annotations.DynamicUpdate;

@Entity(name = "transaction")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@DynamicUpdate
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transaction_id;

    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "content_detail_id")
    private Content_Detail content_detail;

    @OneToOne(mappedBy = "transaction")
    private Report report;

    @OneToOne(mappedBy = "transaction",cascade = CascadeType.ALL)
    private Like_Basket like;




}
