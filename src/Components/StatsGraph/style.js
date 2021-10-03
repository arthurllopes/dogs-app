import styled from "styled-components";

export const Graph = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem 4rem;
`

export const GraphItem = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  display: grid;
  align-items: center;
`

export const Total = styled(GraphItem)`
  grid-column: 1 /3;
  padding: 2rem;
  font-size: 2rem;
`