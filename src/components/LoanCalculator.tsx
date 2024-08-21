import React, { useState } from 'react';
import './LoanCalculator.css'; 

function LoanCalculator() {
  // State variables
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(3); // Default to 3 months
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [netSalary, setNetSalary] = useState(0);
  const [basicSalary, setBasicSalary] = useState(0);

  // Calculate loan details
  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(loanTerm);

    // Calculate monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      setMonthlyPayment(monthly.toFixed(2));
      setTotalPayment((monthly * calculatedPayments).toFixed(2));
      setTotalInterest((monthly * calculatedPayments - principal).toFixed(2));
    } else {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  };

  // Handle input change
  const handleInputChange = (setter, minValue = 0) => (event) => {
    const value = parseFloat(event.target.value) || 0;
    if (value >= minValue) {
      setter(value);
      calculateLoan();
    }
  };

  return (
    <div className="container">
        <div className='header'>
        <h2>Loan Calculator</h2>
        </div>

      <div className="form-group">
        <label>Interest Rate ({interestRate}%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={handleInputChange(setInterestRate)}
          className="form-control"
          min="0"
        />
      </div>

      <div className="form-group">
        <label>Net Salary: GMD {netSalary}</label>
        <input
          type="number"
          value={netSalary}
          onChange={handleInputChange(setNetSalary)}
          className="form-control"
          min="0"
        />
      </div>

      <div className="form-group">
        <label>Basic Salary: GMD {basicSalary}</label>
        <input
          type="number"
          value={basicSalary}
          onChange={handleInputChange(setBasicSalary)}
          className="form-control"
          min="0"
        />
      </div>

      <div className="form-group">
        <label>Loan Amount: GMD {loanAmount}</label>
        <input
          type="range"
          min="1000"
          max="1000000"
          step="500"
          value={loanAmount}
          onChange={handleInputChange(setLoanAmount)}
          className="form-control-range same-width"
        />
      </div>

      <div className="form-group">
        <label>Loan Term: {Math.floor(loanTerm / 12)} years {loanTerm % 12} months</label>
        <input
          type="range"
          min="3"
          max="48" // 4 years * 12 months
          step="1"
          value={loanTerm}
          onChange={handleInputChange(setLoanTerm)}
          className="form-control-range same-width"
        />
      </div>

      <h3 className='header'>Results</h3>
      <div className='result'>
        <p>Monthly Payment: GMD {monthlyPayment}</p>
        <p>Total Interest: GMD {totalInterest}</p>
        <p>Total Payment: GMD {totalPayment}</p>
      </div>
    </div>
  );
}

export default LoanCalculator;
