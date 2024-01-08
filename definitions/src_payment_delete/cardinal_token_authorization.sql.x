config { type: "view" }

SELECT * except(source_ts, rn)
FROM
(
    SELECT *, ROW_NUMBER() OVER (PARTITION BY id ORDER BY source_ts DESC) rn
    FROM `cdate-prod.src_payment_stag.cardinal_token_authorization`
) 
WHERE rn = 1 
union all
select * except(source_ts) from `cdate-prod.src_payment_stag.legacy_cardinal_token_authorization`