var cashbox = {
    amount: 0,
    addPayment(payment) {
        if (payment.amount > 0 && typeof payment.amount === 'number' && typeof payment.info === 'string') {
            this.amount += payment.amount;
            console.log(payment.info + ': ' + payment.amount);
        } else {
            if (payment.amount <= 0) {
                console.log('Ошибка ввода! Сумма должна быть больше 0!');
            } else {
                console.log('Ошибка ввода! Платеж не выполнен!');
            }
        }
    },
    refundPayment(refund) {
        if (this.amount > 0 && refund.amount > 0 && this.amount - refund.amount >= 0 &&
            typeof refund.amount === 'number' && typeof refund.info === 'string') {
            this.amount -= refund.amount;
            console.log(refund.info + ': ' + refund.amount);
        } else {
            if(refund.amount <= 0) {
                console.log('Возврат не выполнен! Введена некорректная сумма для возврата!');
            } else if (this.amount <= 0 || this.amount - refund.amount < 0) {
                console.log('Возврат не выполнен! В кассе недостаточно средств для возврата!');
            }  else {
                console.log('Ошибка ввода! Возврат не выполнен!');
            }
        }
    }
};

cashbox.addPayment({ amount: -10, info: 'Оплата штрафа' });
cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' });
cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' });
cashbox.refundPayment({ amount: -10, info: 'Возврат клиенту' });