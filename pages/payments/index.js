import Layout from "../../containers/layout/Layout";
import styles from "./payments.module.scss";
import Payment from "../../components/payment/payment";
function Payments() {

  return (
    <>
      <h1 className={styles.utilityModel_title}>Промышленные образцы</h1>
      <div className={styles.utilityModel_block}>
        <div className="utilityModel_block_inner">
          <div className={styles.utilityModel_block_inner_top}>
            <a
              href="/confirmation"
              className={styles.utilityModel_top_link}
            >
              Назад
            </a>
            <h2 className={styles.utilityModel_top_text}>Оплата</h2>
            <div></div>
          </div>
          <div className={styles.utilityModel_block_inner_bottom}>
            <form action="" className={styles.payments_block}>
              <div className={styles.utilityModel_block_inner_bottom_block}>
                <div
                  className={styles.utilityModel_block_inner_bottom_block_left}
                >
                  <h4
                    className={
                      styles.utilityModel_block_inner_bottom_block_title
                    }
                  >
                    Выберите способ оплаты
                  </h4>
                </div>
                <div
                  className={styles.utilityModel_block_inner_bottom_block_right}
                >
                  <Payment />
                </div>
                <div className={styles.payments_link_block}>
                  <a href="" className={styles.payments_link_payment}>
                    Оплатить 456 000 сум
                  </a>
                  <a href="" className={styles.downloads_payments_check}>
                    Скачать квитанцию
                  </a>
                </div>
              </div>

              <div className={styles.payments_block_inner_bottom_right}>
                <div className={styles.payments_block_inner_bottom_right_inner}>
                  <h6
                    className={styles.payments_block_inner_bottom_right_title}
                  >
                    Итого
                  </h6>
                  <div
                    className={
                      styles.payments_block_inner_bottom_right_descblock
                    }
                  >
                    <p
                      className={
                        styles.payments_block_inner_bottom_right_description
                      }
                    >
                      Полезный модели: 450 000 сум{" "}
                    </p>
                    <p
                      className={
                        styles.payments_block_inner_bottom_right_description
                      }
                    >
                      Правообладатель: 1
                    </p>
                    <p
                      className={
                        styles.payments_block_inner_bottom_right_description
                      }
                    >
                      Автор: 1
                    </p>
                  </div>
                  <h6
                    className={styles.payments_block_inner_bottom_right_title2}
                  >
                    Общая сумма: 450 000 сум{" "}
                  </h6>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
Payments.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Payments;
