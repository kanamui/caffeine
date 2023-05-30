import { IFarm } from "../../models/IFarm.interface";
import { Button, FormControl, Input, KeyboardAvoidingView, ScrollView, Stack } from "native-base";
import Navigation from "../../components/navigation/Navigation";
import { useState } from "react";
import MultiSelectDropdown from "../../components/MultiSelectDropdown";

interface IParams {
  data: IFarm;
  action?: string;
}

const coffeeTypes: string[] = ["Arabica", "Robusta", "Excelsa", "Liberica"];

const FarmManager = ({ props, route, navigation }: any) => {
  // Hooks
  const [selected, setSelected] = useState<string[]>([]);

  // Variables
  const { data, action }: IParams = route.params;

  // Handlers
  const onDropdownChange = (value: string[]) => {
    setSelected(value);
  };

  return (
    <>
      <Navigation {...props} title={`${action} ${data?.title || "Farm"}`} />
      <ScrollView bg="white">
        <FormControl p="4">
          <Stack space="4">
            <Stack>
              <FormControl.Label>Farm Name</FormControl.Label>
              <Input value={data?.title} placeholder="Farm Name..." size="md" />
            </Stack>
            <Stack>
              <FormControl.Label>Description</FormControl.Label>
              <Input
                value={data?.description}
                placeholder="Description..."
                size="md"
              />
            </Stack>
            <Stack>
              <FormControl.Label>Coffee Types</FormControl.Label>
              <MultiSelectDropdown
                data={coffeeTypes}
                value={data?.coffeeTypes}
                placeholder="Coffee Types..."
                onChange={onDropdownChange}
              />
            </Stack>
            <Stack>
              <FormControl.Label>Address</FormControl.Label>
              <Input value={data?.address} placeholder="Address..." size="md" />
            </Stack>
            <Stack>
              <FormControl.Label>Email Address</FormControl.Label>
              <Input value={data?.email} placeholder="Email Address..." size="md" />
            </Stack>
            <Stack>
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input value={data?.mobile} placeholder="Phone Number..." size="md" />
            </Stack>
            <Stack mt="4">
              <Button>{action === "Edit" ? "Update" : "Submit"}</Button>
            </Stack>
          </Stack>
        </FormControl>
      </ScrollView>
    </>
  );
};

export default FarmManager;
