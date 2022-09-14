import {
  Box,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAll } from "../../../services/api";
import { VeiculoVIewModel } from "../../models/VeiculoViewModel";

export const VeiculosGrid = () => {
  const [veiculos, setVeiculos] = useState<VeiculoVIewModel[]>([]);

  useEffect(() => {
    const res = getAll<VeiculoVIewModel>("Veiculo/GetAll")
      .then((response) => {
        console.log(response);

        setVeiculos(() => response);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Box width={"100%"} height={"100%"}>
      <Stack direction={"row"}>
        <Box width={"100%"} height={"100%"}>
          {/* <ActionsBar  idAvisoFerias={selectedAvisoFerias.id} /> */}
          <button>Adicionar</button>
          <button>Editar</button>
          <button>Deletar</button>
          <TableContainer>
            <Table variant="simple" size={"sm"} width={"100%"} height={"100%"}>
              <Thead>
                <Tr>
                  <Th>Veículo</Th>
                  <Th>Marca</Th>
                  <Th>Ano</Th>
                  <Th>Descrição</Th>
                  <Th>Data Resgistro</Th>
                  <Th>Vendido</Th>
                </Tr>
              </Thead>
              <Tbody>
                {veiculos &&
                  veiculos.map((veiculo) => {
                    return (
                      <Tr key={veiculo.id}>
                        <Td>{veiculo.modelo}</Td>
                        <Td>{veiculo.marca}</Td>
                        <Td>{veiculo.anoFabricacao}</Td>
                        <Td>{veiculo.descricao}</Td>
                        <Td>{new Date(veiculo.dataRegistro).toLocaleDateString()}</Td>
                        <Td>{veiculo.vendido ? "SIM" : "NÃO"}</Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Box>
  );
};
