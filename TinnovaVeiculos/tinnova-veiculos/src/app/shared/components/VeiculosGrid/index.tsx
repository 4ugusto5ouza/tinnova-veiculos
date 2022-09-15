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
import { IVeiculoViewModel } from "../../models/VeiculoViewModel";
import { ActionsButtons } from "../ActionsButtons";
import { FormFilters } from "../FormFilters";

export interface VeiculoFormFieldsProps {
  AnoFabricacaoMinimo: string;
  AnoFabricacaoMaximo: string;
  DataRegistroMinimo: string;
  DataRegistroMaximo: string;
  Marca: string;
}

export const VeiculosGrid = () => {
  const [veiculos, setVeiculos] = useState<IVeiculoViewModel[]>([]);
  const [formFields, setFormFields] = useState<VeiculoFormFieldsProps>(
    {} as VeiculoFormFieldsProps
  );

  useEffect(() => {
    getAll<IVeiculoViewModel>("Veiculo/GetAll", { filters: formFields })
      .then((response) => setVeiculos(() => response))
      .catch((error) => console.log(error));
  }, [formFields]);

  function handleSetFormFields({
    AnoFabricacaoMinimo: anoFabricacaoMinimo,
    AnoFabricacaoMaximo: anoFabricacaoMaximo,
    DataRegistroMinimo: dataRegistroMinimo,
    DataRegistroMaximo: dataRegistroMaximo,
    Marca: marca,
  }: VeiculoFormFieldsProps) {
    if (anoFabricacaoMinimo.length > 2)
      setFormFields((prevState) => ({
        ...prevState,
        AnoFabricacaoMinimo: anoFabricacaoMinimo,
      }));
    if (anoFabricacaoMaximo.length > 2)
      setFormFields((prevState) => ({
        ...prevState,
        AnoFabricacaoMaximo: anoFabricacaoMaximo,
      }));
    if (dataRegistroMinimo.length > 2)
      setFormFields((prevState) => ({
        ...prevState,
        DataRegistroMinimo: dataRegistroMinimo,
      }));
    if (dataRegistroMaximo.length > 2)
      setFormFields((prevState) => ({
        ...prevState,
        DataRegistroMaximo: dataRegistroMaximo,
      }));
    if (marca.length > 2)
      setFormFields((prevState) => ({ ...prevState, Marca: marca }));
  }

  return (
    <Box width={"100%"} height={"700px"}>
      <Stack direction={"row"}>
        <FormFilters
          formTitle="Fitros"
          handleSetFormFields={handleSetFormFields}
        />
        <Box width={"100%"} height={"100%"}>
          <ActionsButtons />
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
                        <Td>
                          {new Date(veiculo.dataRegistro).toLocaleDateString()}
                        </Td>
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
