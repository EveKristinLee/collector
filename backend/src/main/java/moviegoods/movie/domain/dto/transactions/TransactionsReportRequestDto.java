package moviegoods.movie.domain.dto.transactions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionsReportRequestDto {
    private Long user_id;
    private Long transaction_id;
}
